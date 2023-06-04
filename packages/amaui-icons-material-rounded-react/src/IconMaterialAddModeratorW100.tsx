import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575h-.188q-.087 0-.187-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.6q-.15-.05-.35-.088-.2-.037-.35-.087v-4.45q0-.25-.137-.45-.138-.2-.388-.3l-5.2-1.925Q12.15 4.2 12 4.2q-.15 0-.275.05l-5.2 1.925q-.25.1-.387.3-.138.2-.138.45V11.1q0 1.575.475 2.987.475 1.413 1.288 2.576.812 1.162 1.912 2 1.1.837 2.325 1.237l.075-.025q.075.15.175.3.1.15.225.3-.125.05-.237.075-.113.025-.238.025Zm5 .125q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm0-.85q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H14.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.15v2.15q0 .15.1.25t.25.1Zm-5-7.8Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100.displayName = 'AmauiIconMaterialAddModeratorW100';

export default IconMaterialAddModeratorW100;
