import { useState } from 'react';
import image1 from "../assets/Environmental-Sustainability-1.jpg"
import './Home.css'
export default function Home(){
    return(
        <div className="main">
            <div className="intro">
                <h1>What Is Environmental Sustainability?</h1>
            </div>
        <div className="container-wrap">
            <div className="container main-content">
                {/* Article */}
                <div className="row">
                    <div className="author">
                        By EcoTrack’s Editorial Team | April 20, 2024          				  
                    </div> <br />
                    {/* 1 */}
                    <article className="Article">
                        Human wellbeing is deeply intertwined with environmental health. According to the World 
                        Health Organization, 24% of all deaths worldwide are attributable to modifiable 
                        environmental factors. Clean air, pure water, and safe living conditions free from toxins 
                        and hazards are essential for health.
                    </article> <br /> <br />
                    <article className="Article">
                    As the long-term impacts of rapid industrial expansion and energy consumption become increasingly
                     apparent, urgent action is required to mitigate these effects and prevent further environmental 
                     degradation. This will ensure the availability of healthy living environments for future 
                     generations. For businesses, this involves adopting sustainable environmental practices that 
                     contribute to the prosperity of communities and safeguard their own future growth opportunities.
                    </article> <br /> <br />
                    {/* 2 */}
                    <article className="Article">
                    <h2>What Is Environmental Sustainability?</h2>
                    Environmental sustainability involves the duty to preserve natural resources and safeguard global
                     ecosystems to maintain health and wellbeing, both today and in the future. A critical aspect of 
                     environmental sustainability is its proactive approach, considering that many environmental impacts
                      from current decisions may not be immediately apparent. The U.S. Environmental Protection Agency 
                      encapsulates this concept by defining it as “meeting the needs of the present without compromising 
                      the ability of future generations to meet their own needs.”
                    </article> <br /> <br />
                    {/* 3 */}
                    <article className="Article">
                        <h2>Environmental Regulations</h2>
                        Environmental sustainability standards differ significantly based on local economic, social,
                         and environmental contexts. Often, regulations are established at the federal level. For 
                         instance, in the United States, the Environmental Protection Agency (EPA) oversees 
                         regulations ranging from air pollutants and refrigerants to hazardous waste management. 
                         The EPA sets and enforces standards for air, water, soil quality, wildlife habitats, and 
                         carbon emissions, utilizing monetary fines and legal actions for enforcement. Additionally,
                          state/provincial and local governments can implement stricter regulations. Cities such as 
                          Madrid and Paris, for example, are imposing restrictions on diesel vehicles and older, less
                           fuel-efficient cars.
                    </article> <br /> <br />
                    <article className="Article">
                    Nevertheless, research suggests that achieving environmental sustainability might require
                            a more comprehensive set of global regulations or a stronger commitment from businesses 
                            themselves. According to a study published in the Harvard Business Review, while multinational
                             corporations tend to reduce emissions in countries with stringent environmental regulations, 
                             they may increase emissions in nations where the regulations are more lenient.
                    </article> <br /><br />
                    {/* 4 */}
                    <article className="Article">
                        <h2>Economic Growth and Environmental Sustainability</h2>
                        Companies undoubtedly have a societal obligation to adopt environmentally sustainable practices,
                         yet these practices need not conflict with business objectives. In fact, when executed effectively,
                          environmental sustainability can align profits with the welfare of people and the planet.
                    </article> <br /> <br />
                    <article className="Article">
                    It is well understood that unchecked consumption imposes substantial burdens on human welfare. As 
                    GDP increases, so does our energy consumption, leading to more environmental pollution and the depletion 
                    of natural resources. However, this does not mean that businesses cannot be both prosperous and sustainable. 
                    Certain types of growth are compatible with sustainability. For example, the renewable energy sector creates new
                     job opportunities, and reducing energy and plastic use in production can enhance profit margins. Adopting this 
                     approach requires a long-term perspective and incorporating environmental considerations into corporate cost-benefit 
                     analyses. Successfully achieving this balance represents an investment in a future economy where businesses can flourish sustainably.
                    </article> <br /> <br />
                    {/* 5 */}
                    <article className="Article">
                        <h2>ESG and Environmental Sustainability</h2>
                        The terms “ESG” (Environmental, Social, and Governance) and “sustainability” are often used 
                        interchangeably, particularly in the context of benchmarking and data disclosure.
                    </article> <br /><br />
                    <article className="Article">
                    While sustainability broadly encompasses various green initiatives and corporate responsibilities, 
                    ESG has emerged as the term of choice among investors and capital markets. The industry began with a 
                    focus on sustainability but has expanded to encompass ESG practices, performance, reporting, and their 
                    implications for capital opportunities. ESG metrics are instrumental in identifying risk-adjusted returns. 
                    The emphasis on all three ESG pillars has transformed how companies evaluate and communicate their performance.
                    </article> <br /> <br />
                    {/* 6 */}
                    <article className="Article">
                        <h2>Conclusion</h2>
                        Exponential population growth has intensified farming activities, resulting in higher greenhouse gas emissions and widespread deforestation. Additionally, industrial and technological advancements have significantly increased our demand for energy. However, our planet is nearing its limits. The impacts of global warming on ecosystems and communities are becoming increasingly evident. This urgent situation underscores the necessity for businesses to invest in environmentally sustainable and socially responsible practices. By adopting clean energy solutions and ensuring fair wages, businesses can help secure a viable future for all.

                    </article> <br /><br />
                    {/* cards */}
                    <div className="resources">
                        <h2>Further Resources on Environmental Sustainability</h2>
                        <div className="cards">
                            {/* card1 */}
                            <div className="card-box card1">
                                <div className="card-image"><img src="https://images.theconversation.com/files/567074/original/file-20231221-24-zjv59y.jpg?ixlib=rb-4.1.0&rect=0%2C502%2C7964%2C3976&q=45&auto=format&w=1356&h=668&fit=crop" alt="" /></div>
                                <div className="card-title">A beginner’s guide to sustainable investing</div>
                                <a href="https://theconversation.com/a-beginners-guide-to-sustainable-investing-219421" target='_blank'><div className="card-button">Read Article</div></a>
                            </div>
                            {/* card2 */}
                            <div className="card-box card2">
                                <div className="card-image"><img src="https://images.unsplash.com/photo-1562819324-f6c02d873b68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt="" /></div>
                                <div className="card-title">A sustainable future begins at ground level</div>
                                <a href="https://theconversation.com/a-sustainable-future-begins-at-ground-level-222943" target='_blank'><div className="card-button">Read Article</div></a>
                            </div>
                            {/* card3 */}
                            <div className="card-box card3">
                                <div className="card-image"><img src="https://sdb-denver.com/wp-content/uploads/2022/09/SDB-Sustainable-Fall-Ideas-Sustainable-Design-Build-Fall-home-ideas-and-remodeling-and-composting.jpg" alt="" /></div>
                                <div className="card-title">How Sustainability Efforts Fall Apart</div> <br />
                                <a href="https://hbr.org/2022/09/how-sustainability-efforts-fall-apart" target='_blank'><div className="card-button">Read Article</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}