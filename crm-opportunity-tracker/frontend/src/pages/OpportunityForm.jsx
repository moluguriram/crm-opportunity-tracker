import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import API from "../api/axios";
import Navbar from "../components/Navbar";

const OpportunityForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    customerName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    requirement: "",
    estimatedValue: "",
    stage: "New",
    priority: "Medium",
    nextFollowUpDate: "",
    notes: "",
  });

  useEffect(() => {
    if (id) {
      fetchOpportunity();
    }
  }, []);

  const fetchOpportunity = async () => {
    try {
      const { data } = await API.get(
        `/opportunities/${id}`
      );

      setForm({
        ...data,
        nextFollowUpDate:
          data.nextFollowUpDate
            ? data.nextFollowUpDate.split(
                "T"
              )[0]
            : "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await API.put(
          `/opportunities/${id}`,
          form
        );
      } else {
        await API.post(
          "/opportunities",
          form
        );
      }

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Error saving opportunity"
      );
    }
  };

  return (
    <div>
      <Navbar />

      <h2>
        {id
          ? "Edit Opportunity"
          : "Create Opportunity"}
      </h2>

      <form onSubmit={handleSubmit}>
        <label>
          Customer Name
        </label>
        <br />
        <input
          type="text"
          value={form.customerName}
          onChange={(e) =>
            setForm({
              ...form,
              customerName:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Contact Name
        </label>
        <br />
        <input
          type="text"
          value={form.contactName}
          onChange={(e) =>
            setForm({
              ...form,
              contactName:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Contact Email
        </label>
        <br />
        <input
          type="email"
          value={form.contactEmail}
          onChange={(e) =>
            setForm({
              ...form,
              contactEmail:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Contact Phone
        </label>
        <br />
        <input
          type="text"
          value={form.contactPhone}
          onChange={(e) =>
            setForm({
              ...form,
              contactPhone:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Requirement
        </label>
        <br />
        <input
          type="text"
          value={form.requirement}
          onChange={(e) =>
            setForm({
              ...form,
              requirement:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Estimated Value
        </label>
        <br />
        <input
          type="number"
          value={form.estimatedValue}
          onChange={(e) =>
            setForm({
              ...form,
              estimatedValue:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>Stage</label>
        <br />
        <select
          value={form.stage}
          onChange={(e) =>
            setForm({
              ...form,
              stage:
                e.target.value,
            })
          }
        >
          <option>
            New
          </option>
          <option>
            Contacted
          </option>
          <option>
            Qualified
          </option>
          <option>
            Proposal Sent
          </option>
          <option>
            Won
          </option>
          <option>
            Lost
          </option>
        </select>

        <br />
        <br />

        <label>
          Priority
        </label>
        <br />
        <select
          value={form.priority}
          onChange={(e) =>
            setForm({
              ...form,
              priority:
                e.target.value,
            })
          }
        >
          <option>
            Low
          </option>
          <option>
            Medium
          </option>
          <option>
            High
          </option>
        </select>

        <br />
        <br />

        <label>
          Next Follow Up Date
        </label>
        <br />
        <input
          type="date"
          value={
            form.nextFollowUpDate
          }
          onChange={(e) =>
            setForm({
              ...form,
              nextFollowUpDate:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <label>
          Notes
        </label>
        <br />
        <textarea
          rows="4"
          cols="40"
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default OpportunityForm;