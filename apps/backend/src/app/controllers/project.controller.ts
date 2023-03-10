import {
  IAddProject,
  IAllProjectsResponse,
  IEditProject,
  IEditProjectResponse,
  IProject,
  IProjectResponse,
  ISingleProjectsResponse,
} from '@time-tracker-app/models';
import { UserProjectController } from '.';
import { IProjectSchema, Project } from '../schemas/project.schema';

export default class ProjectController {
  public async getAllProjects(): Promise<IAllProjectsResponse> {
    const projects: IProject[] = await Project.find();
    return {
      data: projects,
      status: 200,
      success: true,
      message: 'Project fetched successfully',
    };
  }

  public async getSingleProjects(id: string): Promise<ISingleProjectsResponse> {
    const project: IProject = await Project.findById(id).lean();
    if (project) {
      return {
        data: project,
        status: 200,
        success: true,
        message: 'Project fetched successfully',
      };
    }
    return {
      status: 400,
      success: false,
      message: 'No record found',
    };
  }

  public async addProject(project: IAddProject, userId: string): Promise<IProjectResponse> {
    const newProject: IProjectSchema = await Project.create(project);
    const userProjectController = new UserProjectController()
    userProjectController.saveProjectForUser(newProject._id, userId)

    if (newProject) {
      return {
        status: 200,
        success: true,
        message: 'Project added successfully',
      };
    }

    return {
      status: 500,
      success: false,
      message: 'Something went wrong',
    };
  }

  public async editProject(
    project: IEditProject
  ): Promise<IEditProjectResponse> {
    // find the existing project in record
    const editRecord: IProject = await Project.findByIdAndUpdate(
      project._id,
      {
        name: project.name,
        description: project.description,
        language: project.language,
        updatedAt: new Date(),
      },
      { new: true }
    );
    if (editRecord) {
      return {
        data: editRecord,
        status: 200,
        success: true,
        message: 'Project edited successfully',
      };
    }

    return {
      status: 500,
      success: false,
      message: 'Something went wrong',
    };
  }
}
