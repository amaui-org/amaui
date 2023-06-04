import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.7 15.9-.7-.7v-.75q.75-.125 1.225-.663.475-.537.475-1.287 0-.75-.475-1.288-.475-.537-1.225-.662V6h-4.55q-.125-.75-.662-1.225Q12.25 4.3 11.5 4.3t-1.287.475Q9.675 5.25 9.55 6H8.8l-.7-.7H9q.35-.8 1.012-1.25.663-.45 1.488-.45t1.488.45Q13.65 4.5 14 5.3h4.7V10q.8.35 1.25 1.012.45.663.45 1.488t-.45 1.488Q19.5 14.65 18.7 15Zm-5.275-5.275ZM19.85 20.85 3.15 4.15l.5-.5 16.7 16.7ZM11.5 12.5Zm-7.2 7.2V15q.75-.325 1.225-1Q6 13.325 6 12.5T5.525 11q-.475-.675-1.225-1V5.25l.7.5V9.6q.8.425 1.25 1.212.45.788.45 1.688 0 .9-.45 1.688Q5.8 14.975 5 15.4V19h3.575q.45-.8 1.237-1.25.788-.45 1.688-.45.9 0 1.688.45.787.45 1.237 1.25h3.825l.5.7H14q-.325-.75-1-1.225Q12.325 18 11.5 18t-1.5.475q-.675.475-1 1.225Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100.displayName = 'AmauiIconMaterialExtensionOffW100';

export default IconMaterialExtensionOffW100;
