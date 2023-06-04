import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentSatisfiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSatisfiedW100Filled'

      short_name='SentimentSatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 10.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-6.5 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.175 8.5 8.75 8.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM12 16.7q1.075 0 2.138-.512 1.062-.513 1.787-1.638.125-.175.025-.362-.1-.188-.35-.188-.05 0-.112.037-.063.038-.113.088-.55.85-1.412 1.363Q13.1 16 12 16t-1.962-.512q-.863-.513-1.413-1.363-.05-.05-.1-.088Q8.475 14 8.4 14q-.225 0-.338.175-.112.175.013.375.725 1.125 1.788 1.638 1.062.512 2.137.512Zm0 4q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialSentimentSatisfiedW100Filled.displayName = 'AmauiIconMaterialSentimentSatisfiedW100Filled';

export default IconMaterialSentimentSatisfiedW100Filled;
