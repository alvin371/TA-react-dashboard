import React from "react";

const StarRating = ({
  count = 5,
  rating = 0,
  filled = "#FFC107",
  unfilled = "#DCDCDC",
  onRating,
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return filled;
    }
    if (!hoverRating && rating >= index) {
      return filled;
    }

    return unfilled;
  };

  const starRating = React.useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <svg
          key={idx}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "24px", height: "24px", color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRating(idx)}
        >
          <path
            d="M23.9374 9.20627C23.7803 8.7203 23.3493 8.37514 22.8393 8.32918L15.9123 7.70019L13.1731 1.28896C12.9712 0.8191 12.5112 0.514954 12.0001 0.514954C11.4891 0.514954 11.0291 0.8191 10.8271 1.29006L8.08797 7.70019L1.15982 8.32918C0.65077 8.37624 0.220828 8.7203 0.0628038 9.20627C-0.0952203 9.69225 0.0507185 10.2253 0.435799 10.5613L5.67183 15.1533L4.12785 21.9546C4.01487 22.4547 4.20897 22.9716 4.6239 23.2715C4.84692 23.4326 5.10786 23.5147 5.37098 23.5147C5.59786 23.5147 5.8229 23.4535 6.02487 23.3327L12.0001 19.7615L17.9732 23.3327C18.4103 23.5956 18.9612 23.5716 19.3753 23.2715C19.7904 22.9707 19.9843 22.4536 19.8713 21.9546L18.3273 15.1533L23.5633 10.5622C23.9484 10.2253 24.0955 9.69316 23.9374 9.20627Z"
            fill="currentColor"
          />
        </svg>
      ));
  }, [count, rating, hoverRating]);

  return <div className="flex gap-2 cursor-pointer">{starRating}</div>;
};

export default StarRating;
