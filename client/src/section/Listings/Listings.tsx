import {
  DeleteListing,
  DeleteListingVariables,
} from "./__generated__/DeleteListing";

import { gql, useMutation, useQuery } from "@apollo/client";
import { Listings as ListingData } from "./__generated__/Listings";
import { Alert, Avatar, Button, List, Skeleton } from "antd";

const LISTINGS = gql`
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
      title
    }
  }
`;

const Listings = () => {
  const { data, refetch, loading, error } = useQuery<ListingData>(LISTINGS);
  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListngError },
  ] = useMutation<DeleteListing, DeleteListingVariables>(DELETE_LISTING);

  const handleDelteListing = async (id: string) => {
    await deleteListing({ variables: { id } });
    refetch();
  };

  if (loading)
    return (
      <div className="container">
        <Skeleton />
        <Skeleton />
      </div>
    );
  if (error)
    return (
      <div className="container">
        <Alert message="Faild to fetch listing" type="error" showIcon />
      </div>
    );
  const listings = data ? data.listings : undefined;

  if (deleteListingLoading)
    return (
      <div className="container">
        <Skeleton />
        <Skeleton />
      </div>
    );

  if (deleteListngError)
    return (
      <div className="container">
        <Alert message="Faild to delete listing" type="error" showIcon />
      </div>
    );

  return (
    <div className="container">
      <h1>Listings</h1>
      <List
        className="listings"
        itemLayout="horizontal"
        dataSource={listings}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.address}
            />
            <Button
              onClick={() => handleDelteListing(item.id)}
              type="text"
              danger
            >
              Delete
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Listings;
