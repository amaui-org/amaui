import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialDistanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistanceW100Filled'

      short_name='SocialDistance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 6.85q-.575 0-.962-.388Q5 6.075 5 5.5t.388-.963q.387-.387.962-.387t.962.387q.388.388.388.963t-.388.962q-.387.388-.962.388ZM3 10.35v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.313.125q.637.125 1.212.4.375.175.6.462.225.288.225.663v.05Zm14.65-3.5q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387Q19 4.925 19 5.5t-.387.962q-.388.388-.963.388Zm-3.35 3.5v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Zm-8.05 9.225L3.175 16.5l3.075-3.075.475.475-2.25 2.25h15.05l-2.25-2.25.475-.475 3.075 3.075-3.075 3.075-.475-.475 2.25-2.25H4.475l2.25 2.25Z"/>
    </Icon>
  );
});

IconMaterialSocialDistanceW100Filled.displayName = 'AmauiIconMaterialSocialDistanceW100Filled';

export default IconMaterialSocialDistanceW100Filled;
