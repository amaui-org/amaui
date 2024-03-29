import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpFilled'

      short_name='SwipeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.775 13.35q-.275.275-.637.25-.363-.025-.563-.325-1-1.45-1.538-3.163Q3.5 8.4 3.5 6.5q0-.7.075-1.375T3.8 3.8L2.575 5.025q-.225.225-.525.225-.3 0-.525-.225Q1.3 4.8 1.3 4.5q0-.3.225-.525L3.8 1.7q.15-.15.325-.225Q4.3 1.4 4.5 1.4t.375.075q.175.075.325.225l2.275 2.275Q7.7 4.2 7.7 4.5q0 .3-.225.525-.225.225-.525.225-.3 0-.525-.225l-1.1-1.1q-.15.625-.237 1.275Q5 5.85 5 6.5q0 1.65.488 3.15.487 1.5 1.362 2.775.15.2.125.475-.025.275-.2.45Zm8.475 8.325-5.2-2.15q-.35-.15-.537-.537-.188-.388-.113-.763.05-.3.288-.513.237-.212.612-.287l3.275-.65L9.2 6.95q-.25-.575-.037-1.15.212-.575.787-.825.575-.25 1.15-.038.575.213.825.788l2.45 5.5.825-.375q.2-.075.45-.138.25-.062.45-.037l4.575.2q.65.05 1.15.45.5.4.675 1l1.25 4.325q.2.725-.1 1.4-.3.675-1 .975L17 21.55q-.425.2-.9.238-.475.037-.85-.113Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpFilled.displayName = 'AmauiIconMaterialSwipeUpFilled';

export default IconMaterialSwipeUpFilled;
