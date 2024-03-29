import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Highlight'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.95 7.325 4.225 6.6q-.325-.3-.337-.7-.013-.4.312-.7.3-.3.712-.313.413-.012.713.288l.725.725q.275.275.288.688Q6.65 7 6.35 7.3q-.275.275-.688.287-.412.013-.712-.262ZM12 5q-.425 0-.712-.288Q11 4.425 11 4V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v1q0 .425-.287.712Q12.425 5 12 5Zm5.7 2.325q-.3-.3-.3-.725t.3-.725l.7-.7q.275-.275.687-.275.413 0 .713.3.275.275.275.7 0 .425-.275.7l-.7.7q-.3.3-.7.312-.4.013-.7-.287ZM11 22q-.825 0-1.412-.587Q9 20.825 9 20v-3l-2.425-2.425q-.275-.275-.425-.637-.15-.363-.15-.763V10q0-.425.287-.713Q6.575 9 7 9h10q.425 0 .712.287Q18 9.575 18 10v3.175q0 .4-.15.763-.15.362-.425.637L15 17v3q0 .825-.587 1.413Q13.825 22 13 22Zm0-2h2v-3.825l3-3V11H8v2.175l3 3V20Zm1-4.5Z"/>
    </Icon>
  );
});

IconMaterialHighlight.displayName = 'AmauiIconMaterialHighlight';

export default IconMaterialHighlight;
