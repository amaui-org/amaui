import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltW100'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h11.45q-.05.175-.062.337-.013.163-.038.363H4v13.8L5.8 16H20V8.475q.2-.05.363-.1.162-.05.337-.125v8.45H6.1Zm3.35-6.15h6.7v-.7h-6.7Zm0-3h10.7v-.7H6.65Zm0-3h9.325q-.2-.175-.325-.338-.125-.162-.25-.362H6.65ZM4 4.8v13V4 4.8Zm15 1.8q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q18.025 1.9 19 1.9q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662Q19.975 6.6 19 6.6Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltW100.displayName = 'AmauiIconMaterialMarkUnreadChatAltW100';

export default IconMaterialMarkUnreadChatAltW100;
