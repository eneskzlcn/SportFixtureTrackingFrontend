import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixtures } from "../redux/actions/fixtureActions";
import FixtureCard from "./FixtureCard";

function FixtureGridList(){
    const fixtures = useSelector((state)=> state.allFixtures.fixtures);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getFixtures());
    },[dispatch])
    return(<div className="form-inline">
            {
              fixtures.map((fixture)=>{
                  return(<FixtureCard key={fixture.fixtureId} fixture={fixture}></FixtureCard>)
              })
            }
        </div>);
}

export default FixtureGridList;