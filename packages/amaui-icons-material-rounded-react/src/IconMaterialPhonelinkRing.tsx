import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRing'

      short_name='PhonelinkRing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 16.5q-.225-.225-.237-.588-.013-.362.187-.637.525-.7.8-1.538.275-.837.275-1.737 0-.9-.275-1.738-.275-.837-.8-1.537-.2-.275-.2-.625t.25-.6q.35-.35.812-.325.463.025.738.375.725.95 1.1 2.087.375 1.138.375 2.363t-.375 2.363q-.375 1.137-1.1 2.087-.275.35-.738.375-.462.025-.812-.325Zm-2.525-2.525q-.2-.2-.237-.525-.038-.325.112-.675.075-.2.125-.388.05-.187.05-.387t-.05-.388q-.05-.187-.125-.387-.15-.35-.112-.675.037-.325.237-.525.4-.4.888-.337.487.062.712.487.225.425.338.875.112.45.112.95 0 .5-.112.95-.113.45-.338.875-.225.425-.712.487-.488.063-.888-.337ZM17 20H7v1h10Zm0-16V3H7v1ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23ZM7 3v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRing.displayName = 'AmauiIconMaterialPhonelinkRing';

export default IconMaterialPhonelinkRing;
