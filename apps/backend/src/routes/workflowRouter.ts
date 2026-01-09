import { Router } from "express";
import { createWorkflow,getWorkflows,getWorkflowById,updateWorkflow,deleteWorkflow } from "../controller/workflow.controller";
import { authMiddleware } from "../middlewares/authmiddleware";
const router = Router();

router.use(authMiddleware);

router.post("/", createWorkflow);
router.get("/", getWorkflows);
router.get("/:id", getWorkflowById);
router.put("/:id", updateWorkflow);
router.delete("/:id", deleteWorkflow);

export default router;