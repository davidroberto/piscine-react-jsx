const Profile = () => {
  const userInfos = {
    fullName: "David Robert",
    job: "Web Developper",
    age: 33,
    isActive: false,
  };

  return (
    <div>
      <p>{userInfos.fullName}</p>
      <p>{userInfos.job}</p>
      <p>{userInfos.age}</p>
    </div>
  );
};

export default Profile;
