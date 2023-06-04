import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomParentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentW100Filled'

      short_name='BedroomParent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 16.3q.15 0 .25-.1t.1-.25V14.7h11v1.25q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V13q0-.35-.2-.763-.2-.412-.55-.637v-1.5q0-.65-.425-1.075Q16.6 8.6 15.95 8.6h-2.8q-.425 0-.712.162-.288.163-.438.438-.15-.275-.438-.438-.287-.162-.712-.162h-2.8q-.65 0-1.075.425-.425.425-.425 1.075v1.5q-.35.225-.55.637-.2.413-.2.763v2.95q0 .15.1.25t.25.1Zm6.2-5v-1.2q0-.35.225-.575.225-.225.575-.225h2.8q.35 0 .575.225.225.225.225.575v1.2Zm-5.1 0v-1.2q0-.35.225-.575Q7.7 9.3 8.05 9.3h2.8q.35 0 .575.225.225.225.225.575v1.2ZM6.5 14v-1q0-.425.287-.713Q7.075 12 7.5 12h9q.425 0 .712.287.288.288.288.713v1Zm-1.7 6.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentW100Filled.displayName = 'AmauiIconMaterialBedroomParentW100Filled';

export default IconMaterialBedroomParentW100Filled;
