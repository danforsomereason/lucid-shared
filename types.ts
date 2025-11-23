import {
    usersTable,
    coursesTable,
    learningObjectivesTable,
    modulesTable,
    questionsTable,
    optionsTable,
    organizationsTable,
    jobRolesTable,
    moduleProgressTable,
    assignedCoursesTable,
    tracksTable,
    tracksAssignmentsTable,
    verifiedUsersTable,
} from "./schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Users
export const usersInsertSchema = createInsertSchema(usersTable);
export type UserInsert = z.infer<typeof usersInsertSchema>;
export const usersSelectSchema = createSelectSchema(usersTable, {
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export type User = z.infer<typeof usersSelectSchema>;

// Courses
export const coursesInsertSchema = createInsertSchema(coursesTable);
export type CourseInsert = z.infer<typeof coursesInsertSchema>;
export const coursesSelectSchema = createSelectSchema(coursesTable);
export type Course = z.infer<typeof coursesSelectSchema>;

// Learning Objectives
export const learningObjectivesInsertSchema = createInsertSchema(
    learningObjectivesTable
);
export type LearningObjectiveInsert = z.infer<
    typeof learningObjectivesInsertSchema
>;
export const learningObjectivesSelectSchema = createSelectSchema(
    learningObjectivesTable
);
export type LearningObjective = z.infer<typeof learningObjectivesSelectSchema>;

// Modules
export const modulesInsertSchema = createInsertSchema(modulesTable);
export type ModuleInsert = z.infer<typeof modulesInsertSchema>;
export const modulesSelectSchema = createSelectSchema(modulesTable);
export type Module = z.infer<typeof modulesSelectSchema>;

// Questions
export const questionsInsertSchema = createInsertSchema(questionsTable);
export type QuestionInsert = z.infer<typeof questionsInsertSchema>;
export const questionsSelectSchema = createSelectSchema(questionsTable);
export type Question = z.infer<typeof questionsSelectSchema>;

// Options
export const optionsInsertSchema = createInsertSchema(optionsTable);
export type OptionInsert = z.infer<typeof optionsInsertSchema>;
export const optionsSelectSchema = createSelectSchema(optionsTable);
export type Option = z.infer<typeof optionsSelectSchema>;

// Organizations
export const organizationsInsertSchema = createInsertSchema(organizationsTable);
export type OrganizationInsert = z.infer<typeof organizationsInsertSchema>;
export const organizationsSelectSchema = createSelectSchema(
    organizationsTable,
    {
        createdAt: z.coerce.date(),
    }
);
export type Organization = z.infer<typeof organizationsSelectSchema>;

// Job Roles
export const jobRolesInsertSchema = createInsertSchema(jobRolesTable);
export type JobRoleInsert = z.infer<typeof jobRolesInsertSchema>;
export const jobRolesSelectSchema = createSelectSchema(jobRolesTable);
export type JobRole = z.infer<typeof jobRolesSelectSchema>;

// Module Progress
export const moduleProgressInsertSchema =
    createInsertSchema(moduleProgressTable);
export type ModuleProgressInsert = z.infer<typeof moduleProgressInsertSchema>;
export const moduleProgressSelectSchema = createSelectSchema(
    moduleProgressTable,
    {
        startModule: z.coerce.date(),
        endModule: z.coerce.date().optional(),
    }
);
export type ModuleProgress = z.infer<typeof moduleProgressSelectSchema>;

// Assigned Courses
export const assignedCoursesInsertSchema =
    createInsertSchema(assignedCoursesTable);
export type AssignedCourseInsert = z.infer<typeof assignedCoursesInsertSchema>;
export const assignedCoursesSelectSchema = createSelectSchema(
    assignedCoursesTable,
    {
        assignedDate: z.coerce.date(),
        completedAt: z.coerce.date().optional(),
    }
);
export type AssignedCourse = z.infer<typeof assignedCoursesSelectSchema>;

// Tracks
export const tracksInsertSchema = createInsertSchema(tracksTable);
export type TrackInsert = z.infer<typeof tracksInsertSchema>;
export const tracksSelectSchema = createSelectSchema(tracksTable, {
    complianceCycle: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
export type Track = z.infer<typeof tracksSelectSchema>;

// Tracks Assignments
export const tracksAssignmentsInsertSchema = createInsertSchema(
    tracksAssignmentsTable
);
export type TrackAssignmentInsert = z.infer<
    typeof tracksAssignmentsInsertSchema
>;
export const tracksAssignmentsSelectSchema = createSelectSchema(
    tracksAssignmentsTable,
    {
        assignedAt: z.coerce.date(),
    }
);
export type TrackAssignment = z.infer<typeof tracksAssignmentsSelectSchema>;

// Verified Users
export const verifiedUsersInsertSchema = createInsertSchema(verifiedUsersTable);
export type VerifiedUserInsert = z.infer<typeof verifiedUsersInsertSchema>;
export const verifiedUsersSelectSchema = createSelectSchema(
    verifiedUsersTable,
    {
        invitedAt: z.coerce.date(),
    }
);
export type VerifiedUser = z.infer<typeof verifiedUsersSelectSchema>;

// Endpoint Schemas
export const registerInputSchema = usersInsertSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    licenseType: true,
});
export type RegisterInput = z.infer<typeof registerInputSchema>;
