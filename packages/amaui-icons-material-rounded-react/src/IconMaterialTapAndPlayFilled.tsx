import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapAndPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayFilled'

      short_name='TapAndPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 23v-2h1V6H7v6H5V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23ZM5 23v-2q.825 0 1.412.587Q7 22.175 7 23Zm5 0q-.375 0-.688-.275-.312-.275-.437-.7-.275-1.075-1.05-1.85-.775-.775-1.85-1.05-.425-.125-.7-.425Q5 18.4 5 18q0-.425.287-.7.288-.275.688-.225 1.9.325 3.263 1.687 1.362 1.363 1.687 3.263.05.4-.225.687-.275.288-.7.288Zm4 0q-.4 0-.7-.288-.3-.287-.35-.712-.35-2.725-2.287-4.663Q8.725 15.4 6 15.05q-.425-.05-.713-.338Q5 14.425 5 14t.3-.713q.3-.287.7-.237 3.575.35 6.088 2.862Q14.6 18.425 14.95 22q.05.4-.237.7-.288.3-.713.3Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayFilled.displayName = 'AmauiIconMaterialTapAndPlayFilled';

export default IconMaterialTapAndPlayFilled;
