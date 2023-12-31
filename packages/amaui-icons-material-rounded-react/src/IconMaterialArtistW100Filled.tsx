import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtistW100Filled'

      short_name='Artist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700.056-232Q669-232 647.5-253.444q-21.5-21.443-21.5-52.5Q626-337 647.46-358.5 668.92-380 700-380q14 0 25.5 4.5T746-362v-176q0-12.75 8.625-21.375T776-568h50q11 0 19.5 8.05T854-540q0 11-8.5 19.5T826-512h-52v206q0 31.08-21.444 52.54-21.443 21.46-52.5 21.46ZM414-512q-44.55 0-76.275-31.725Q306-575.45 306-620q0-44.55 31.725-76.275Q369.45-728 414-728q44.55 0 76.275 31.725Q522-664.55 522-620q0 44.55-31.725 76.275Q458.55-512 414-512ZM146-262v-22q0-22 13.5-41.5T196-356q57-27 110.5-39.5T414-408q32 0 59.5 3.5T527-393q-17 38-20 80.5t14 80.5H176q-12.75 0-21.375-8.625T146-262Z"/>
    </Icon>
  );
});

IconMaterialArtistW100Filled.displayName = 'AmauiIconMaterialArtistW100Filled';

export default IconMaterialArtistW100Filled;
