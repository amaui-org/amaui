import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUmbrella = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Umbrella'

      short_name='Umbrella'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.3 0-.562-.163-.263-.162-.388-.512L6 6.075l3.5.85 1.5-1.15V3.4q0-1 .725-1.7T13.5 1q1.05 0 1.775.7.725.7.725 1.7V4h-2v-.6q0-.2-.15-.338-.15-.137-.35-.137-.2 0-.35.137Q13 3.2 13 3.4v2.375l1.5 1.15 3.5-.85L12.95 21.3q-.125.35-.388.525Q12.3 22 12 22Zm1-7.2 1.95-5.95-.9.225L13 8.3Zm-2 0V8.3l-1.05.8-.925-.25Z"/>
    </Icon>
  );
});

IconMaterialUmbrella.displayName = 'AmauiIconMaterialUmbrella';

export default IconMaterialUmbrella;
