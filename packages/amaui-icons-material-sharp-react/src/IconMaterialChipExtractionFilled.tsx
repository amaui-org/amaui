import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipExtractionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipExtractionFilled'

      short_name='ChipExtraction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3v2Q9.075 5 7.038 7.037 5 9.075 5 12q0 2.925 2.038 4.962Q9.075 19 12 19Zm4-4-1.4-1.425L17.175 13H9v-2h8.175L14.6 8.4 16 7l5 5Z"/>
    </Icon>
  );
});

IconMaterialChipExtractionFilled.displayName = 'AmauiIconMaterialChipExtractionFilled';

export default IconMaterialChipExtractionFilled;
