export default function UserInput({
  handleField,
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  function onInputChange(event) {
    const { name, valueAsNumber } = event.target;
    handleField(name, valueAsNumber);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            required
            onChange={onInputChange}
            type="number"
            name="initialInvestment"
            value={initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            required
            onChange={onInputChange}
            type="number"
            name="annualInvestment"
            value={annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            required
            onChange={onInputChange}
            type="number"
            name="expectedReturn"
            value={expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            required
            onChange={onInputChange}
            type="number"
            name="duration"
            value={duration}
          />
        </p>
      </div>
    </section>
  );
}
