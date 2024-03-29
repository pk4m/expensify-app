import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setSortBy, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusedInput) => this.setState({ calendarFocused: focusedInput });

  onTextChange = (e) => this.props.setTextFilter(e.target.value);

  onSortChange = (e) => this.props.setSortBy(e.target.value);

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <label>Search by description</label>
            <input type="text" className="text-input" placeholder="Eg., Rent" value={this.props.filters.text} onChange={this.onTextChange} />
          </div>
          <div className="input-group__item">
            <label>Sort by</label>
            <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
              <option value="createdAt">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <label>Filter by dates</label>
            <div>
              <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="filterStartDate"
                endDate={this.props.filters.endDate}
                endDateId="filterEndDate"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={() => false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
