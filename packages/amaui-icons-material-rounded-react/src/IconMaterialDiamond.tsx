import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diamond'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.875q-.425 0-.825-.187-.4-.188-.7-.538L2.825 10q-.375-.45-.45-1.05-.075-.6.2-1.125L4.45 4.1q.275-.5.738-.8Q5.65 3 6.225 3h11.55q.575 0 1.037.3.463.3.738.8l1.875 3.725q.275.525.2 1.125-.075.6-.45 1.05l-7.65 9.15q-.3.35-.7.538-.4.187-.825.187ZM9.625 8h4.75l-1.5-3h-1.75ZM11 16.675V10H5.45Zm2 0L18.55 10H13ZM16.6 8h2.65l-1.5-3H15.1ZM4.75 8H7.4l1.5-3H6.25Z"/>
    </Icon>
  );
});

IconMaterialDiamond.displayName = 'AmauiIconMaterialDiamond';

export default IconMaterialDiamond;
