import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartW100Filled'

      short_name='ShieldWithHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10.2q-.225-.275-.575-.438-.35-.162-.775-.162-.675 0-1.175.487-.5.488-.5 1.163 0 .575.3 1.062.3.488 1.4 1.538l.825.775q.2.2.488.2.287 0 .512-.2l.825-.725q1.1-1.05 1.4-1.563.3-.512.3-1.087 0-.675-.5-1.163-.5-.487-1.175-.487-.425 0-.775.162-.35.163-.575.438Zm0 10.375h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartW100Filled.displayName = 'AmauiIconMaterialShieldWithHeartW100Filled';

export default IconMaterialShieldWithHeartW100Filled;
