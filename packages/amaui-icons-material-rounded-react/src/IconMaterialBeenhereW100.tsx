import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhereW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereW100'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.225q-.125 0-.225-.037-.1-.038-.2-.113L5.6 16.6q-.15-.1-.225-.263Q5.3 16.175 5.3 16V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h10.4q.625 0 1.062.437.438.438.438 1.063V16q0 .175-.075.337-.075.163-.225.263l-5.975 4.475q-.1.075-.2.113-.1.037-.225.037Zm0-.725 6-4.5V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8V16Zm-1.05-6.7q.15 0 .275-.05.125-.05.25-.175L15.45 9.6q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-4 4-1.9-1.9q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l1.875 1.875q.125.125.25.175.125.05.275.05ZM12 4H6h12Z"/>
    </Icon>
  );
});

IconMaterialBeenhereW100.displayName = 'AmauiIconMaterialBeenhereW100';

export default IconMaterialBeenhereW100;
