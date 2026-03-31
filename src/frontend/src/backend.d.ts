import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface JoinApplication {
    inGameName: string;
    name: string;
    experience: string;
    timestamp: Time;
    discordUsername: string;
    whyJoin: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllJoinApplications(): Promise<Array<JoinApplication>>;
    submitContactSubmission(name: string, email: string, message: string): Promise<void>;
    submitJoinApplication(name: string, discordUsername: string, inGameName: string, experience: string, whyJoin: string): Promise<void>;
}
