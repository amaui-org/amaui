import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalW100'

      short_name='SwipeVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.75 21.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H4.3q-1.825-1.8-2.862-3.975Q.4 14.35.4 12q0-2.35 1.038-4.525Q2.475 5.3 4.3 3.5H1.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.1q.325 0 .538.212.212.213.212.538v3.1q0 .15-.1.25t-.25.1Q5.1 7 5 6.9t-.1-.25v-2.8q-1.95 2-2.875 3.975T1.1 12q0 2.2.925 4.175Q2.95 18.15 4.9 20.15v-2.8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.1q0 .325-.212.537-.213.213-.538.213Zm13.475-.575-4.9-1.85q-.225-.075-.362-.288-.138-.212-.113-.462.025-.2.175-.375t.375-.225l3.4-.775-3.975-8.9q-.2-.475-.037-.925.162-.45.637-.65t.938-.038q.462.163.662.638l2.15 4.85.95-.425q.1-.05.2-.05h.175l3.4.125q.825.05 1.412.637.588.588.788 1.388l1 3.925q.05.25-.062.463-.113.212-.363.337l-5.85 2.6q-.125.05-.287.05-.163 0-.313-.05Zm.325-.65 5.85-2.6-1-3.925q-.125-.525-.5-.963-.375-.437-1.025-.487l-3.45-.175-1.6.725-2.45-5.475q-.1-.2-.275-.288-.175-.087-.375.013-.2.1-.275.287-.075.188.025.388l4.3 9.675-4.225.95Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalW100.displayName = 'AmauiIconMaterialSwipeVerticalW100';

export default IconMaterialSwipeVerticalW100;
