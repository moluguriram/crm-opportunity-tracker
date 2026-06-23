import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../api/axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [opportunities, setOpportunities] =
    useState([]);

  const fetchOpportunities =
    async () => {
      try {
        const { data } =
          await API.get(
            "/opportunities"
          );

        setOpportunities(data);
      } catch (error) {
        console.log(error);
      }
    };

  const deleteOpportunity =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this opportunity?"
        );

      if (!confirmDelete) return;

      try {
        await API.delete(
          `/opportunities/${id}`
        );

        fetchOpportunities();
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchOpportunities();
  }, []);

  return (
    <div>
      <Navbar />

      <h2>Dashboard</h2>

      {opportunities.length === 0 ? (
        <p>
          No opportunities found.
        </p>
      ) : (
        opportunities.map((op) => (
          <div
            key={op._id}
             className="card"
          >
            <h3>
              {op.customerName}
            </h3>

            <p>
              <strong>
                Contact Name:
              </strong>{" "}
              {op.contactName}
            </p>

            <p>
              <strong>
                Contact Email:
              </strong>{" "}
              {op.contactEmail}
            </p>

            <p>
              <strong>
                Contact Phone:
              </strong>{" "}
              {op.contactPhone}
            </p>

            <p>
              <strong>
                Requirement:
              </strong>{" "}
              {op.requirement}
            </p>

            <p>
              <strong>
                Estimated Value:
              </strong>{" "}
              ₹
              {op.estimatedValue}
            </p>

            <p>
              <strong>
                Stage:
              </strong>{" "}
              {op.stage}
            </p>

            <p>
              <strong>
                Priority:
              </strong>{" "}
              {op.priority}
            </p>

            <p>
              <strong>
                Follow Up Date:
              </strong>{" "}
              {op.nextFollowUpDate
                ? new Date(
                    op.nextFollowUpDate
                  ).toLocaleDateString()
                : "N/A"}
            </p>

            <p>
              <strong>
                Notes:
              </strong>{" "}
              {op.notes || "N/A"}
            </p>

            <Link
              to={`/edit/${op._id}`}
            >
              Edit
            </Link>

            {" | "}

            <button
              onClick={() =>
                deleteOpportunity(
                  op._id
                )
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;