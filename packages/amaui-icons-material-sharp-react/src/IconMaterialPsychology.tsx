import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Psychology'

      short_name='Psychology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-3H6v-4H5q-.6 0-.862-.5-.263-.5.012-1L6.125 9q.2-2.5 2.2-4.25T13 3q2.9 0 4.95 2.05Q20 7.1 20 10q0 2.125-1.112 3.8-1.113 1.675-2.888 2.55V21Zm2-2h3v-3.95l.9-.4q1.35-.6 2.225-1.838Q18 11.575 18 10q0-2.075-1.462-3.537Q15.075 5 13 5q-2 0-3.438 1.338Q8.125 7.675 8 9.775L6.725 12H8v4h3Zm1-5h2l.15-1.25q.2-.075.35-.163.15-.087.3-.237l1.15.5 1-1.7-1-.75q.05-.2.05-.4t-.05-.4l1-.75-1-1.7-1.15.5q-.15-.15-.3-.238-.15-.087-.35-.162L14 6h-2l-.15 1.25q-.2.075-.35.162-.15.088-.3.238l-1.15-.5-1 1.7 1 .75q-.05.2-.05.4t.05.4l-1 .75 1 1.7 1.15-.5q.15.15.3.237.15.088.35.163Zm1-2.5q-.65 0-1.075-.425Q11.5 10.65 11.5 10q0-.65.425-1.075Q12.35 8.5 13 8.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425Zm-.625.5Z"/>
    </Icon>
  );
});

IconMaterialPsychology.displayName = 'AmauiIconMaterialPsychology';

export default IconMaterialPsychology;
