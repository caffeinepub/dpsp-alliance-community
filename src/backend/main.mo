import Principal "mo:core/Principal";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type JoinApplication = {
    name : Text;
    discordUsername : Text;
    inGameName : Text;
    experience : Text;
    whyJoin : Text;
    timestamp : Time.Time;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module JoinApplication {
    public func compare(a : JoinApplication, b : JoinApplication) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let joinApplications = List.empty<JoinApplication>();
  let contactSubmissions = List.empty<ContactSubmission>();

  // Add application
  public shared ({ caller }) func submitJoinApplication(name : Text, discordUsername : Text, inGameName : Text, experience : Text, whyJoin : Text) : async () {
    let application : JoinApplication = {
      name;
      discordUsername;
      inGameName;
      experience;
      whyJoin;
      timestamp = Time.now();
    };
    joinApplications.add(application);
  };

  // Add contact
  public shared ({ caller }) func submitContactSubmission(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllJoinApplications() : async [JoinApplication] {
    if (caller != Principal.fromText("2vxsx-fae")) { Runtime.trap("Admin only") };
    joinApplications.toArray().sort();
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (caller != Principal.fromText("2vxsx-fae")) { Runtime.trap("Admin only") };
    contactSubmissions.values().toArray();
  };
};
