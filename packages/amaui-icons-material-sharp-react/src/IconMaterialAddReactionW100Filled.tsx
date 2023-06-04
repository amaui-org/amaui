import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddReactionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReactionW100Filled'

      short_name='AddReaction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.65 6.35v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Zm-5.4 4.15q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-6.5 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.175 8.5 8.75 8.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM12 16.7q1.2 0 2.363-.638 1.162-.637 1.887-2.062h-8.5q.725 1.425 1.887 2.062Q10.8 16.7 12 16.7Zm0 4q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q.975 0 1.9.2.925.2 1.75.6v2.25h2.975v3H20.3q.2.625.3 1.287.1.663.1 1.363 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAddReactionW100Filled.displayName = 'AmauiIconMaterialAddReactionW100Filled';

export default IconMaterialAddReactionW100Filled;
