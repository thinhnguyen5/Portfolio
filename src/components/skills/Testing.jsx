import React from 'react'

const VersionControl = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Testing</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Unit test</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Automation test(Jest, Mocha Chai)</h3>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">TDD</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VersionControl