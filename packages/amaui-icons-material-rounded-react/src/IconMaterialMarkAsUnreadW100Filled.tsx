import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadW100Filled'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.675 16.2q-.3-.2-.5-.512-.2-.313-.2-.688V7.15q0-.225.113-.4.112-.175.337-.3L10.5 2.9q.075-.05.163-.063.087-.012.162-.012.075 0 .163.012.087.013.162.063l6.925 3.55q.2.075.3.275.1.2.15.425h-.6l-7.1-3.6-7.15 3.55Zm4.45 3.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-7.4q0-.65.425-1.075.425-.425 1.075-.425h11.4q.65 0 1.075.425.425.425.425 1.075v7.4q0 .65-.425 1.075-.425.425-1.075.425Zm5.7-5.65q.1 0 .188-.013.087-.012.162-.062l5.95-3.075q.075-.05.138-.125.062-.075.062-.2 0-.2-.162-.313-.163-.112-.313-.012l-6.025 3.1-6-3.1q-.175-.1-.337.012-.163.113-.163.313 0 .125.05.2.05.075.15.125l5.95 3.075q.05.025.35.075Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100Filled.displayName = 'AmauiIconMaterialMarkAsUnreadW100Filled';

export default IconMaterialMarkAsUnreadW100Filled;
