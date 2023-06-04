import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadW100'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.675 16.2q-.3-.2-.5-.512-.2-.313-.2-.688V7.15q0-.225.113-.4.112-.175.337-.3L10.5 2.9q.075-.05.163-.063.087-.012.162-.012.075 0 .163.012.087.013.162.063l6.925 3.55q.2.075.3.275.1.2.15.425h-.6l-7.1-3.6-7.15 3.55Zm4.45 3.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-7.4q0-.65.425-1.075.425-.425 1.075-.425h11.4q.65 0 1.075.425.425.425.425 1.075v7.4q0 .65-.425 1.075-.425.425-1.075.425Zm5.7-5.65q-.1 0-.187-.013-.088-.012-.163-.062L7.325 10.8v7.4q0 .35.225.575.225.225.575.225h11.4q.35 0 .575-.225.225-.225.225-.575v-7.4l-6.15 3.175q-.05.025-.35.075Zm0-.7 6.2-3.2q-.125-.075-.237-.113-.113-.037-.263-.037h-11.4q-.125 0-.25.037-.125.038-.25.113Zm-6.5-2.55v.1-.9V10.9v-.1V19 18.2Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100.displayName = 'AmauiIconMaterialMarkAsUnreadW100';

export default IconMaterialMarkAsUnreadW100;
