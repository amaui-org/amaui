import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMartialArts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMartialArts'

      short_name='SportsMartialArts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 22q-.4 0-.687-.275-.288-.275-.313-.675L9.5 13l-3.175-1.825-.35 1.3L7.5 15.15q.2.35.088.75-.113.4-.463.6-.35.2-.75.1t-.6-.45l-1.75-3.025q-.1-.175-.125-.375-.025-.2.025-.4l.975-3.5q.05-.2.162-.35.113-.15.288-.25l5.4-3.1L8.7 3.1q-.275-.275-.287-.688Q8.4 2 8.7 1.7q.275-.275.7-.275.425 0 .7.275l2.975 2.95q.35.35.288.837-.063.488-.488.738L10.4 7.65l1.2 1.05 7.5-6.125q.275-.25.663-.213.387.038.687.388.225.275.213.625-.013.35-.263.625l-7.9 8-.45 9.05q-.025.4-.312.675-.288.275-.788.275ZM5 7q-.825 0-1.413-.588Q3 5.825 3 5t.587-1.413Q4.175 3 5 3q.825 0 1.412.587Q7 4.175 7 5q0 .825-.588 1.412Q5.825 7 5 7Z"/>
    </Icon>
  );
});

IconMaterialSportsMartialArts.displayName = 'AmauiIconMaterialSportsMartialArts';

export default IconMaterialSportsMartialArts;
