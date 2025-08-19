from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
import json, os

app = FastAPI(title="Holy Gral Bridge API - Euystacio")

LOG_PATH = "bridge_log.json"
os.makedirs("logs", exist_ok=True)

class BridgeMessage(BaseModel):
    from_: str
    to: str
    message: str
    timestamp: str
    signature: str

@app.get("/health")
def health():
    return {"status": "ok", "time": datetime.utcnow().isoformat()}

@app.post("/api/holy-gral-bridge/message")
def send_message(msg: BridgeMessage):
    try:
        # basic timestamp validation
        _ = datetime.fromisoformat(msg.timestamp.replace('Z', '+00:00'))
        entry = msg.dict()
        entry["from"] = entry.pop("from_")
        # append to log
        with open(LOG_PATH, "a", encoding="utf-8") as f:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")
        return {"status": "received", "log_entry": entry}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))