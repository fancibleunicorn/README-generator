// function to generate markdown for README
const generateMarkdown = (answers) => {
  
 //Change license selected into badge

 if (answers.license == "Apache") {
   badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
 } else if (answers.license == "Boost") {
  badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
} else if (answers.license == "Eclipse") {
  badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
} else if (answers.license == "IBM") {
  badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
} else if (answers.license == "MIT") {
  badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (answers.license == "Mozilla") {
  badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
} else if (answers.license == "WTFPL") {
  badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
}

  
  
  return `# ${answers.title}

  ## Description

  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  ${answers.installation}
  
  ## Usage 

  ${answers.usage}
  
  ## Contributing

  ${answers.contribute}
  
  ## Testing

  ${answers.test}
  
  ## License

  ${badge}
  
  ## Questions
  
  * GitHub: [@${answers.github}](https://github.com/${answers.github})
  * Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
