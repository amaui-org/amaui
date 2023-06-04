import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackW100'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 17.7q-.65 0-1.075-.425Q2 16.85 2 16.2V7.8q0-.65.425-1.075Q2.85 6.3 3.5 6.3h8.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h8.4q.35 0 .575-.225.225-.225.225-.575V7.8q0-.35-.225-.575Q12.25 7 11.9 7H3.5q-.35 0-.575.225Q2.7 7.45 2.7 7.8v8.4q0 .35.225.575Q3.15 17 3.5 17Zm13.85.7q-.15 0-.25-.1t-.1-.25V6.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v10.725q0 .125-.1.225t-.25.1Zm4.3 0q-.15 0-.25-.1t-.1-.25V6.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v10.725q0 .125-.1.225t-.25.1Zm-16.85-3h5.8q.15 0 .225-.138.075-.137-.025-.262l-1.45-1.975q-.1-.125-.25-.125t-.25.125L7.2 14.5l-1.15-1.525q-.1-.125-.238-.125-.137 0-.237.125L4.6 14.3q-.1.125-.025.262.075.138.225.138ZM2.7 7v10V7Z"/>
    </Icon>
  );
});

IconMaterialArtTrackW100.displayName = 'AmauiIconMaterialArtTrackW100';

export default IconMaterialArtTrackW100;
