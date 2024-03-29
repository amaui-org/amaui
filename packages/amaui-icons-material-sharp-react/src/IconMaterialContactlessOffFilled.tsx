import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactlessOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOffFilled'

      short_name='ContactlessOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.85 17.35q.2-.45.35-.925.15-.475.275-.975l-1.7-1.7q-.125.725-.312 1.438-.188.712-.463 1.362ZM11.6 16q.375-.875.563-1.775.187-.9.237-1.85L10.225 10.2q.1.425.138.875.037.45.037.925 0 .875-.15 1.688-.15.812-.5 1.562Zm-3.2-1.35q.225-.6.362-1.263Q8.9 12.725 8.9 12t-.138-1.388Q8.625 9.95 8.4 9.35l-1.85.75q.15.45.25.925.1.475.1.975t-.1.975q-.1.475-.25.925Zm12.075 8.65-2.95-2.95q-1.2.8-2.587 1.225Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.625.475-3.088.475-1.462 1.35-2.687H6.25L20.375 20.35h-2.85L.675 3.5 2.1 2.075l19.8 19.8Zm-.1-5.8-4.5-4.5q.025-.25.025-.5V12q0-1.425-.263-2.763-.262-1.337-.787-2.587l-1.85.8q.35.825.562 1.7.213.875.288 1.825L12 9.125l-.15-.55q-.075-.275-.2-.55l-.525.225L6.5 3.625q1.2-.775 2.588-1.2Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912-.425 1.388-1.2 2.588Z"/>
    </Icon>
  );
});

IconMaterialContactlessOffFilled.displayName = 'AmauiIconMaterialContactlessOffFilled';

export default IconMaterialContactlessOffFilled;
