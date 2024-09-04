import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2OffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2OffFilled'

      short_name='Landscape2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M848-54q-12 12-28.5 12T791-54L55-791q-12-12-12-28.5T55-848q12-12 28.5-12t28.5 12l737 737q12 12 11.5 28.5T848-54ZM240-560q-50 0-85-35.5T120-680q0-32 16-59t42-43l164 164q-16 26-43 42t-59 16Zm600 279q-11 7-24.5 6.5T791-286L466-609q-8-8-10.5-18.5t.5-21.5l2-5q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l115 329q5 15-.5 27.5T840-281ZM111-160q-23 0-34.5-19T75-218l109-218q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l51-170 377 377H111Z"/>
    </Icon>
  );
});

IconMaterialLandscape2OffFilled.displayName = 'AmauiIconMaterialLandscape2OffFilled';

export default IconMaterialLandscape2OffFilled;
