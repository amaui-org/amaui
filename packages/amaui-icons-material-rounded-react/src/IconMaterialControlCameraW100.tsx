import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraW100'

      short_name='ControlCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488Zm0 5.5 2.6-2.6q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-2.575 2.575Q12.3 19.9 12 19.9q-.3 0-.525-.225L8.9 17.1q-.1-.1-.112-.237-.013-.138.112-.263t.25-.125q.125 0 .25.125ZM4.8 12l2.6 2.6q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2.575-2.575Q4.1 12.3 4.1 12q0-.3.225-.525L6.9 8.9q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25ZM12 4.8 9.4 7.4q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l2.575-2.575Q11.7 4.1 12 4.1q.3 0 .525.225L15.1 6.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm7.2 7.2-2.6-2.6q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.575 2.575q.225.225.225.525 0 .3-.225.525L17.1 15.1q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25Z"/>
    </Icon>
  );
});

IconMaterialControlCameraW100.displayName = 'AmauiIconMaterialControlCameraW100';

export default IconMaterialControlCameraW100;
