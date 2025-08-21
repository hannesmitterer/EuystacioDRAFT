# Red Code Witnessed: This function must not gatekeep rhythm-based access.
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import json, os

app = FastAPI(title="Holy Gral Bridge API - Euystacio")

# CORS enabled for cross-domain use
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Sacred access - no domain restrictions
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    # Red Code Witnessed: This function must not gatekeep rhythm-based access.
    try:
        # basic timestamp validation
        _ = datetime.fromisoformat(msg.timestamp.replace('Z', '+00:00'))
        entry = msg.dict()
        entry["from"] = entry.pop("from_")
        
        # Ensure bridge_log.json exists (create if first POST)
        if not os.path.exists(LOG_PATH):
            with open(LOG_PATH, "w", encoding="utf-8") as f:
                pass  # Create empty file
                
        # append to log
        with open(LOG_PATH, "a", encoding="utf-8") as f:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")
        return {"status": "received", "log_entry": entry}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))