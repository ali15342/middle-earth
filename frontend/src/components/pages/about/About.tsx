import React from "react";
import "./about.css";

function About() {
    const currentPath = window.location.pathname;
    return (
        <div>
            <div>
                <h1>About us</h1>
                <p className="text-center">
                    We are a group of 3 students who have been working on this
                    project for the last few months. We are happy to share it
                    with you. Explore the world of middle earth with our map. We
                    offer
                </p>
                <div className="text-center columnUL">
                    <li>A map of middle earth</li>
                    <li>A quiz</li>
                    <li>The Lord of the ring trivia</li>
                    <li>Latest tweets</li>
                    <li>Find out which character you are</li>
                </div>
                {currentPath === "/about/elf" ? (
                    <>
                        <h1> About you </h1>
                        <p className={"text-center"}>
                            The Elves, who called themselves the Quendi and who
                            in lore are commonly referred to as Eldar (People of
                            the Stars), were the first and eldest of the
                            Children of Ilúvatar, considered the fairest and
                            wisest of the earthly race of Arda.
                        </p>
                    </>
                ) : (
                    <></>
                )}
                {currentPath === "/about/dwarf" ? (
                    <>
                        <h1> About you </h1>
                        <p className={"text-center"}>
                            Dwarves were a race of Middle-earth also known as
                            the Khazâd (in their own tongue) or Casari, Naugrim,
                            meaning Stunted People, and Gonnhirrim, the Masters
                            of Stone.
                        </p>
                    </>
                ) : (
                    <></>
                )}
                {currentPath === "/about/human" ? (
                    <>
                        <h1> About you </h1>
                        <p className={"text-center"}>
                            Men (initially named Atani) were one of several
                            races inhabiting Arda. They are the humans of
                            Middle-earth, and the second of the Children of
                            Ilúvatar.
                        </p>
                    </>
                ) : (
                    <></>
                )}
                {currentPath === "/about/orc" ? (
                    <>
                        <h1> About you </h1>
                        <p className={"text-center"}>
                            Orcs were the primary soldiers of the Dark Lords
                            armies and sometimes the weakest (but most numerous)
                            of their servants. They were created by the first
                            Dark Lord, Morgoth, before the First Age and served
                            him and later his successor in their quest to
                            dominate Middle-earth. Before Oromë first found the
                            Elves at Cuiviénen, Melkor kidnapped some of them
                            and cruelly deformed them, twisting them into the
                            first Orcs.
                        </p>
                    </>
                ) : (
                    <></>
                )}
                {currentPath === "/about/wizard" ? (
                    <>
                        <h1> About you </h1>{" "}
                        <p className={"text-center"}>
                            The Wizards, initially known as the Istari or Heren
                            Istarion (Order of Wizards), were five Maiar spirits
                            sent to Middle-earth while embodied as old Men to
                            aid the Free Peoples against the threat of Sauron.
                        </p>
                    </>
                ) : (
                    <></>
                )}
                {currentPath === "/about/hobbit" ? (
                    <>
                        <h1> About you </h1>
                        <p className={"text-center"}>
                            Hobbits, also known as Halflings, were an ancient
                            mortal race that lived in Middle-earth. Although
                            their exact origins are unknown, they were initially
                            found in the northern regions of Middle-earth and
                            below the Vales of Anduin. At the beginning of the
                            Third Age, hobbits moved north and west. Most of
                            their race eventually founded the land of the Shire
                            in the year TA 1601, though one type of hobbit known
                            as Stoors remained in the Anduin Vale (the type of
                            hobbit Sméagol was).
                        </p>{" "}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default About;
