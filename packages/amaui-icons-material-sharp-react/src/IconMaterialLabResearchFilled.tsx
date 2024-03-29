import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabResearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabResearchFilled'

      short_name='LabResearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-2.075 0-3.537-1.462Q3 19.075 3 17V8H1V2h14v6h-2v3.025q-1.05.675-1.787 1.687-.738 1.013-1.038 2.288H8v-2h3v-1H8v-2h3V8H5v9q0 1.25.875 2.125T8 20q.75 0 1.375-.325t1.05-.9q.2.5.45.95.25.45.6.875-.675.65-1.562 1.025Q9.025 22 8 22Zm0-4v-2h2.025q-.05.5-.012 1 .037.5.162 1Zm8.5 1q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19Zm5.1 4-2.7-2.7q-.55.35-1.15.525-.6.175-1.25.175-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .65-.175 1.25T20.3 18.9l2.7 2.7Z"/>
    </Icon>
  );
});

IconMaterialLabResearchFilled.displayName = 'AmauiIconMaterialLabResearchFilled';

export default IconMaterialLabResearchFilled;
