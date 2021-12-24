import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="sign-up">Sign up</h1>
      <form id="form-group" className="form-group">
        <div className="form-control">
          <label htmlFor="username" className="form-label"></label>
          <input type="text" className="form-input" id="username" name="username" value="" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="email" className="form-label"></label>
          <input type="email" className="form-input" id="email" name="email" value="" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="male" className="form-label"></label>
          <input type="radio" className="form-input" id="male" name="male" value="" />
          <label htmlFor="female" className="form-label"></label>
          <input type="radio" className="form-input" id="female" name="male" value="" />
        </div>
        <div>
          <label htmlFor="date" className="form-label"></label>
          <input type="date" className="form-input" id="date" name="date" value="" />
        </div>
        <div>
          <label></label>
          <select className="dob" id="day" name="day" value="">
            <option value="">Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select className="dob" id="mon" name="mon" value="">
            <option value="">Mon</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <select className="dob" id="year" name="year" value="">
            <option value="">Year</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
          </select>
        </div>
        <div>
          <label htmlFor="number" className="form-label"></label>
          <input type="number" className="form-input" id="number" name="number" value="" placeholder="Mob Number" />
        </div>
        <div>
          <label htmlFor="file" className="form-label"></label>
          <input type="file" className="form-input" id="file" name="file" value="" />
        </div>
        <div>
          <label htmlFor="url" className="form-label"></label>
          <input type="url" className="form-input" id="url" name="url" value="" placeholder="Url" />
        </div>
        <div>
          <label htmlFor="image" className="form-label"></label>
          <input type="image" className="form-input" alt="image" id="image" name="image" value="" />
        </div>
        <div>
          <label htmlFor="password" className="form-label"></label>
          <input type="password" className="form-input" id="password" name="password" value="" placeholder="password" />
        </div>
        <div>
          <label htmlFor="re-password" className="form-label"></label>
          <input type="password" className="form-input" id="re-password" name="re-password" value="" placeholder="re-password" />
        </div>
        <div>
          <label htmlFor="log-me" className="form-label"></label>
          <input type="checkbox" className="form-input" id="log-me" name="log-me" value="" />
        </div>
        <div>
          <button type="submit" className="form-input">Submit</button>
        </div>
        <div>
          <button type="submit" className="form-input">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
