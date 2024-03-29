import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUmbrellaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaFilled'

      short_name='Umbrella'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.3 0-.562-.163-.263-.162-.388-.512l-4.775-14.4q-.1-.275.113-.488.212-.212.487-.137l2.625.625 1.5-1.15V3.4q0-1 .725-1.7T13.5 1q.9 0 1.512.475.613.475.813 1.2.15.55-.125.937-.275.388-.85.388-.35 0-.575-.163-.225-.162-.3-.487-.05-.2-.175-.313-.125-.112-.3-.112-.2 0-.35.137Q13 3.2 13 3.4v2.375l1.5 1.15 2.625-.625q.275-.075.488.137.212.213.112.488L12.95 21.3q-.125.35-.388.525Q12.3 22 12 22Zm1-7.2 1.95-5.95-.9.225L13 8.3Zm-2 0V8.3l-1.05.8-.925-.25Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaFilled.displayName = 'AmauiIconMaterialUmbrellaFilled';

export default IconMaterialUmbrellaFilled;
