import React from "react";
import { Card,CardContent, Grid} from "@mui/material";

export const Fruit=()=>{
       return(
            <Card sx={{bgcolor:"lightgreen"}}>
                <CardContent>
                     <h2 style={{textAlign:"center", color:"red"}}>Fruites Details</h2>
                  
                        <Grid container spacing={4}>
                               <Grid item xs={4}>
                                 <Card>
                                   <CardContent>
                                   <h3>Apple</h3>
                                   <p>Lorem ipsum dolor sadipisicing elit. Nesciunt, quidem?</p>
                                </CardContent>
                                </Card>
                               </Grid>

                               <Grid item xs={6}>
                                 <Card>
                                   <CardContent>
                                   <h3>Mango</h3>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam officiis at possimus fugiat corrupti quasi.</p>
                                </CardContent>
                                </Card>
                               </Grid>
                              
                               <Grid item xs={2}>
                                 <Card>
                                   <CardContent>
                                   <h3>Banana</h3>
                                   <p>consectetur adipisici amet consectetur </p>
                                </CardContent>
                                </Card>
                               </Grid>


                               <Grid item xs={6}>
                                 <Card>
                                   <CardContent>
                                   <h3>Orange</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem?</p>
                                </CardContent>
                                </Card>
                               </Grid>

                               <Grid item xs={6}>
                                 <Card>
                                   <CardContent>
                                   <h3>Kiwi</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem?</p>
                                </CardContent>
                                </Card>
                               </Grid>

                               <Grid item xs={12}>
                                 <Card>
                                   <CardContent>
                                   <h3>Cherry</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem?</p>
                                </CardContent>
                                </Card>
                               </Grid>

                        </Grid>

                </CardContent>
            </Card>

       )

}