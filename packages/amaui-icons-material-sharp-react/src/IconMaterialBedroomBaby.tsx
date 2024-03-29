import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomBaby = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomBaby'

      short_name='BedroomBaby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q2 0 3.8-.75 1.8-.75 3.2-2.15l-1.05-1.05q-.275.275-.537.487-.263.213-.563.413L16 13.5V11h1v-1h-5.6L9.65 7H6l1 .75L5.5 9.5l.95 1L8 9.5v4l-.85 1.45q-.3-.2-.562-.413-.263-.212-.538-.487L5 15.1q1.4 1.4 3.2 2.15Q10 18 12 18Zm0-1.5q-.95 0-1.837-.188-.888-.187-1.713-.612l.85-1.45q1.325.5 2.7.5 1.375 0 2.7-.5l.85 1.45q-.825.375-1.712.588-.888.212-1.838.212ZM2 22V2h20v20Zm2-2h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomBaby.displayName = 'AmauiIconMaterialBedroomBaby';

export default IconMaterialBedroomBaby;
