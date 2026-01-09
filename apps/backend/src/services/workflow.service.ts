import { prisma } from "../lib/prisma";

export const createWorkflow= async (
    title:string,
    userId: string,
    nodes:any,
    connections:any
  ) =>{
    return prisma.workflow.create({
        data:{
            title,
            userId,
            nodes,
            connections,
            enabled:true,
        },
    });
};

export const getWorkflowsByUser = async (userId:string) => {
    return prisma.workflow.findMany({
        where :{userId},
       select:{
                id:true,
                title:true,
                trigger:true,
                actions: true,
                edges:true,
                 createdAt: true,
            },
        });
    };
