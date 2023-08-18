import './App.css';

function UserAuthBtn() {
  return (
    <a href="#" class="btn btn-primary">My Account</a>
  );
}

export default function MyApp() {
  return (
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>CardWallah</h1>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <div class="btn-group">
            <UserAuthBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
