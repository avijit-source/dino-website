import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import BackToTop from './BackToTop';
import ModalComp from './ModalComp';

const DinoList = (props) => {
    const { dinoData } = props;
    const [pagination, setPagination] = useState({ page: 1, limit: 12 });
    const [totalPages, setTotalPages] = useState({ totalPages: 0, skip: 0 });
    const [paginatedData, setPaginatedData] = useState([]);
    const [itemsToStart] = useState(0);
    const [itemsToEnd, setItemsToEnd] = useState(12)
    useEffect(() => {
        if (dinoData) {
            setTotalPages({ totalPages: Math.floor(dinoData.length / pagination.limit), skip: (pagination.page - 1) * pagination.limit })
            setPaginatedData(prevPaginatedData => {
                return dinoData.slice(itemsToStart, itemsToEnd)
                    .filter((v, i, a) => a.findIndex(v2 => (JSON.stringify(v) === JSON.stringify(v2))) === i)
            });
        }
    }, [dinoData, pagination.page, pagination.limit, totalPages.skip, itemsToStart, itemsToEnd])


    const handleShowMore = () => {
        setItemsToEnd(itemsToEnd + pagination.limit)
        setPagination(prevState => {
            return { ...prevState, page: prevState.page + 1 }
        })
    }

    const handleShowLess = () => {
        setItemsToEnd(itemsToEnd - pagination.limit)
        setPagination(prevState => {
            return { ...prevState, page: prevState.page - 1 }
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                {dinoData && paginatedData.length > 0 && (
                    paginatedData.map(dino => {
                        return <div className="col-sm-12 col-md-6 col-lg-3" key={uuidv4()}>
                            <div className="card mb-4 bg-dark text-white">
                                <img src={dino.dinoimg} className="card-img-top" alt="location-img" width="50vw" height="200vh" />
                                <div className="card-body">
                                    <h5 className="card-title">{dino.name}</h5>
                                    <ModalComp dino={dino} />
                                </div>
                            </div>
                        </div>
                    })
                )}
            </div>
            <span>
                <span className="badge bg-success mx-2 p-2 fs" style={{fontSize: "1rem"}}>{paginatedData?.length} results shown</span>
                <button className="btn btn-primary" style={{ marginRight: "10px", borderRadius: "none",display: dinoData?.length === paginatedData?.length ? "none" : "" }}  onClick={handleShowMore}>Show More</button>
                <button className="btn btn-secondary" onClick={handleShowLess} style={{ display: pagination.page === 1 ? "none" : "" }}>Show Less</button>
                <BackToTop />
            </span>

        </div>
    )
}

export default DinoList