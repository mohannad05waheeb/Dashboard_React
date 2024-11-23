const SkillsCard = () => {
  return (     
    <div class="skills-card p-20 bg-white rad-10 mt-20">
      <h2 class="mt-0 mb-10">My Skills</h2>
      <p class="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
      <ul class="m-0 txt-c-mobile">
        <li><span>HTML</span><span>Pugjs</span><span>HAML</span></li>
        <li><span>CSS</span><span>SASS</span><span>Stylus</span></li>
        <li><span>JavaScript</span><span>TypeScript</span></li>
        <li><span>Vuejs</span><span>Reactjs</span></li>
        <li><span>Jest</span><span>Jasmine</span></li>
        <li><span>PHP</span><span>Laravel</span></li>
        <li><span>Python</span><span>Django</span></li>
      </ul>
    </div>
  );
};
export default SkillsCard;